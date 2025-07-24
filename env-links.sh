#!/bin/bash

# Script to create symlinks for environment files across the monorepo
# This ensures consistent environment variables across all apps

set -e

ROOT_DIR="$(pwd)"
ENV_FILE="$ROOT_DIR/.env"

# Check if root .env file exists
if [ ! -f "$ENV_FILE" ]; then
    echo "❌ Root .env file not found. Please create one first."
    exit 1
fi

echo "🔗 Creating environment symlinks..."

# Function to create symlink
create_symlink() {
    local target_dir="$1"
    local link_path="$target_dir/.env"
    
    if [ -d "$target_dir" ]; then
        # Remove existing .env file or symlink
        if [ -f "$link_path" ] || [ -L "$link_path" ]; then
            rm "$link_path"
        fi
        
        # Create relative symlink
        local relative_path
        relative_path=$(realpath --relative-to="$target_dir" "$ENV_FILE")
        ln -s "$relative_path" "$link_path"
        
        echo "  ✅ Created symlink: $link_path -> $relative_path"
    fi
}

# Create symlinks for all apps
for app_dir in "$ROOT_DIR"/apps/*/; do
    if [ -d "$app_dir" ]; then
        create_symlink "$app_dir"
    fi
done

# Create symlinks for packages that need env access
for pkg_dir in "$ROOT_DIR"/packages/*/; do
    if [ -d "$pkg_dir" ]; then
        create_symlink "$pkg_dir"
    fi
done

echo "✨ Environment symlinks created successfully!"
echo "💡 Run 'yarn dev' to start development with consistent environment variables"