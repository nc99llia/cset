$env:NODE_OPTIONS="--max-old-space-size=8192"
node -e 'console.log(v8.getHeapStatistics().heap_size_limit/(1024*1024))'